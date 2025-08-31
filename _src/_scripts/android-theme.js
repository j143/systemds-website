/*
 * Android Theme JavaScript
 * Licensed under the Apache License, Version 2.0
 */

(function() {
  'use strict';
  
  // Initialize when DOM is ready
  document.addEventListener('DOMContentLoaded', function() {
    initializeTheme();
    initializeSidebar();
    initializeSearch();
    initializeMobileNavigation();
    initializeThemeToggle();
    initializeScrollEffects();
    initializeCodeBlocks();
    initializeCodeTabs();
  });
  
  // Theme initialization
  function initializeTheme() {
    // Theme is already initialized in the head, but we can add additional logic here
    console.log('Android theme initialized');
  }
  
  // Sidebar navigation
  function initializeSidebar() {
    var navToggles = document.querySelectorAll('[data-nav-toggle]');
    
    for (var i = 0; i < navToggles.length; i++) {
      navToggles[i].addEventListener('click', function() {
        var isExpanded = this.getAttribute('aria-expanded') === 'true';
        var icon = this.querySelector('.nav-tree-icon');
        var children = this.nextElementSibling;
        
        // Toggle expanded state
        this.setAttribute('aria-expanded', !isExpanded);
        
        // Update icon
        if (icon) {
          icon.textContent = isExpanded ? 'chevron_right' : 'expand_more';
        }
        
        // Store state in localStorage
        var sectionName = this.querySelector('.nav-tree-text').textContent;
        localStorage.setItem('sidebar-' + sectionName, !isExpanded);
      });
    }
    
    // Restore sidebar state from localStorage
    for (var j = 0; j < navToggles.length; j++) {
      var toggle = navToggles[j];
      var sectionName = toggle.querySelector('.nav-tree-text').textContent;
      var savedState = localStorage.getItem('sidebar-' + sectionName);
      
      if (savedState !== null) {
        var isExpanded = savedState === 'true';
        var icon = toggle.querySelector('.nav-tree-icon');
        
        toggle.setAttribute('aria-expanded', isExpanded);
        if (icon) {
          icon.textContent = isExpanded ? 'expand_more' : 'chevron_right';
        }
      }
    }
    
    // Highlight current page in sidebar
    var currentPath = window.location.pathname;
    var sidebarLinks = document.querySelectorAll('.nav-tree-link');
    
    for (var k = 0; k < sidebarLinks.length; k++) {
      var link = sidebarLinks[k];
      if (link.getAttribute('href') === currentPath) {
        link.classList.add('active');
        link.setAttribute('aria-current', 'page');
        
        // Expand parent section
        var parent = link.closest('.nav-tree-children');
        if (parent) {
          var parentToggle = parent.previousElementSibling;
          if (parentToggle && parentToggle.classList.contains('nav-tree-toggle')) {
            parentToggle.setAttribute('aria-expanded', 'true');
            var parentIcon = parentToggle.querySelector('.nav-tree-icon');
            if (parentIcon) {
              parentIcon.textContent = 'expand_more';
            }
          }
        }
      }
    }
  }
  
  // Search functionality
  function initializeSearch() {
    var searchToggle = document.querySelector('[data-search-toggle]');
    var searchBox = document.querySelector('[data-search-box]');
    var searchInput = document.querySelector('[data-search-input]');
    var searchClear = document.querySelector('[data-search-clear]');
    
    if (!searchToggle || !searchBox || !searchInput) return;
    
    // Toggle search box
    searchToggle.addEventListener('click', function() {
      searchBox.classList.toggle('active');
      if (searchBox.classList.contains('active')) {
        searchInput.focus();
      }
    });
    
    // Close search when clicking outside
    document.addEventListener('click', function(e) {
      if (!searchBox.contains(e.target) && !searchToggle.contains(e.target)) {
        searchBox.classList.remove('active');
      }
    });
    
    // Clear search
    if (searchClear) {
      searchClear.addEventListener('click', function() {
        searchInput.value = '';
        searchInput.focus();
        this.classList.remove('visible');
      });
      
      // Show/hide clear button
      searchInput.addEventListener('input', function() {
        if (this.value.length > 0) {
          searchClear.classList.add('visible');
        } else {
          searchClear.classList.remove('visible');
        }
      });
    }
    
    // Search keyboard shortcuts
    document.addEventListener('keydown', function(e) {
      // Open search with / or Ctrl/Cmd + K
      if ((e.key === '/' && !isInputActive()) || 
          ((e.ctrlKey || e.metaKey) && e.key === 'k')) {
        e.preventDefault();
        searchBox.classList.add('active');
        searchInput.focus();
      }
      
      // Close search with Escape
      if (e.key === 'Escape' && searchBox.classList.contains('active')) {
        searchBox.classList.remove('active');
      }
    });
  }
  
  // Mobile navigation
  function initializeMobileNavigation() {
    var mobileToggle = document.querySelector('[data-mobile-menu-toggle]');
    var mobileOverlay = document.querySelector('[data-mobile-nav-overlay]');
    var sidebarNav = document.querySelector('.sidebar-nav');
    
    if (!mobileToggle || !mobileOverlay) return;
    
    // Toggle mobile menu
    mobileToggle.addEventListener('click', function() {
      var isOpen = this.getAttribute('aria-expanded') === 'true';
      
      this.setAttribute('aria-expanded', !isOpen);
      mobileOverlay.classList.toggle('active', !isOpen);
      
      if (sidebarNav) {
        sidebarNav.classList.toggle('sidebar-open', !isOpen);
      }
      
      // Prevent body scroll when menu is open
      document.body.style.overflow = !isOpen ? 'hidden' : '';
    });
    
    // Close mobile menu when clicking overlay
    mobileOverlay.addEventListener('click', function(e) {
      if (e.target === this) {
        closeMobileMenu();
      }
    });
    
    // Mobile dropdown toggles
    var mobileDropdownToggles = document.querySelectorAll('[data-mobile-dropdown-toggle]');
    for (var i = 0; i < mobileDropdownToggles.length; i++) {
      mobileDropdownToggles[i].addEventListener('click', function() {
        var isExpanded = this.getAttribute('aria-expanded') === 'true';
        var icon = this.querySelector('.mobile-nav-icon');
        
        this.setAttribute('aria-expanded', !isExpanded);
        if (icon) {
          icon.textContent = isExpanded ? 'keyboard_arrow_down' : 'keyboard_arrow_up';
        }
      });
    }
    
    function closeMobileMenu() {
      mobileToggle.setAttribute('aria-expanded', 'false');
      mobileOverlay.classList.remove('active');
      if (sidebarNav) {
        sidebarNav.classList.remove('sidebar-open');
      }
      document.body.style.overflow = '';
    }
    
    // Close mobile menu on window resize
    window.addEventListener('resize', function() {
      if (window.innerWidth > 1024) {
        closeMobileMenu();
      }
    });
  }
  
  // Theme toggle
  function initializeThemeToggle() {
    var themeToggle = document.querySelector('[data-theme-toggle]');
    
    if (!themeToggle) return;
    
    themeToggle.addEventListener('click', function() {
      var currentTheme = document.documentElement.getAttribute('data-theme');
      var newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      
      document.documentElement.setAttribute('data-theme', newTheme);
      localStorage.setItem('theme', newTheme);
      
      // Update button aria-label
      this.setAttribute('aria-label', 
        newTheme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'
      );
    });
  }
  
  // Scroll effects
  function initializeScrollEffects() {
    var header = document.querySelector('.app-header');
    
    if (!header) return;
    
    var lastScrollY = window.scrollY;
    var isScrollingUp = false;
    
    function updateHeaderOnScroll() {
      var currentScrollY = window.scrollY;
      isScrollingUp = currentScrollY < lastScrollY;
      
      // Add/remove scrolled class for styling
      if (currentScrollY > 10) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
      
      lastScrollY = currentScrollY;
    }
    
    // Throttled scroll handler
    var scrollTimeout;
    window.addEventListener('scroll', function() {
      if (scrollTimeout) {
        clearTimeout(scrollTimeout);
      }
      scrollTimeout = setTimeout(updateHeaderOnScroll, 10);
    });
  }
  
  // Utility functions
  function isInputActive() {
    var activeElement = document.activeElement;
    return activeElement && (
      activeElement.tagName === 'INPUT' ||
      activeElement.tagName === 'TEXTAREA' ||
      activeElement.contentEditable === 'true'
    );
  }
  
  // Code block functionality
  function initializeCodeBlocks() {
    var copyButtons = document.querySelectorAll('[data-copy-code]');
    
    for (var i = 0; i < copyButtons.length; i++) {
      copyButtons[i].addEventListener('click', function() {
        var codeBlock = this.closest('.code-block');
        var codeContent = codeBlock.querySelector('pre code');
        
        if (codeContent) {
          var textToCopy = codeContent.textContent;
          
          // Use the Clipboard API if available
          if (navigator.clipboard && window.isSecureContext) {
            navigator.clipboard.writeText(textToCopy).then(function() {
              showCopySuccess(this);
            }.bind(this));
          } else {
            // Fallback for older browsers
            var textArea = document.createElement('textarea');
            textArea.value = textToCopy;
            textArea.style.position = 'fixed';
            textArea.style.left = '-999999px';
            textArea.style.top = '-999999px';
            document.body.appendChild(textArea);
            textArea.focus();
            textArea.select();
            
            try {
              document.execCommand('copy');
              showCopySuccess(this);
            } catch (err) {
              console.error('Failed to copy text: ', err);
            }
            
            document.body.removeChild(textArea);
          }
        }
      });
    }
    
    function showCopySuccess(button) {
      button.classList.add('copied');
      setTimeout(function() {
        button.classList.remove('copied');
      }, 2000);
    }
  }
  
  // Code tabs functionality
  function initializeCodeTabs() {
    var tabButtons = document.querySelectorAll('[data-tab]');
    
    for (var i = 0; i < tabButtons.length; i++) {
      tabButtons[i].addEventListener('click', function() {
        var tabId = this.getAttribute('data-tab');
        var tabContainer = this.closest('.code-tabs');
        
        if (tabContainer) {
          // Remove active class from all tab buttons in this container
          var allButtons = tabContainer.querySelectorAll('[data-tab]');
          for (var j = 0; j < allButtons.length; j++) {
            allButtons[j].classList.remove('active');
          }
          
          // Remove active class from all tab panels in this container
          var allPanels = tabContainer.querySelectorAll('[data-tab-panel]');
          for (var k = 0; k < allPanels.length; k++) {
            allPanels[k].classList.remove('active');
          }
          
          // Add active class to clicked button
          this.classList.add('active');
          
          // Add active class to corresponding panel
          var targetPanel = tabContainer.querySelector('[data-tab-panel="' + tabId + '"]');
          if (targetPanel) {
            targetPanel.classList.add('active');
          }
        }
      });
    }
  }
  
  // Smooth scrolling for anchor links
  document.addEventListener('click', function(e) {
    if (e.target.matches && e.target.matches('a[href^="#"]')) {
      e.preventDefault();
      var targetId = e.target.getAttribute('href').substring(1);
      var targetElement = document.getElementById(targetId);
      
      if (targetElement) {
        var headerHeight = document.querySelector('.app-header').offsetHeight;
        var targetPosition = targetElement.offsetTop - headerHeight - 20;
        
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    }
  });
  
})();