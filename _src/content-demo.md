---
layout: android
title: Content Components Demo
description: Demonstration of enhanced content components in the Android Design theme
---

# Content Components Demo

This page showcases the enhanced content components available in the Android Design-inspired theme.

## Admonitions and Callouts

The theme supports various types of admonitions for highlighting important information:

<div class="admonition note">
  <div class="admonition-title">
    <span class="material-icons">info</span>
    Note
  </div>
  <div class="admonition-content">
    <p>This is a note admonition. Use it to provide additional context or important information that readers should be aware of.</p>
  </div>
</div>

<div class="admonition tip">
  <div class="admonition-title">
    <span class="material-icons">lightbulb</span>
    Tip
  </div>
  <div class="admonition-content">
    <p>This is a tip admonition. Use it to share helpful suggestions or best practices that can improve the user's experience.</p>
  </div>
</div>

<div class="admonition warning">
  <div class="admonition-title">
    <span class="material-icons">warning</span>
    Warning
  </div>
  <div class="admonition-content">
    <p>This is a warning admonition. Use it to alert users about potential issues or important considerations they should keep in mind.</p>
  </div>
</div>

<div class="admonition caution">
  <div class="admonition-title">
    <span class="material-icons">error</span>
    Caution
  </div>
  <div class="admonition-content">
    <p>This is a caution admonition. Use it for critical information that could prevent errors or problems if not followed carefully.</p>
  </div>
</div>

<div class="admonition info">
  <div class="admonition-title">
    <span class="material-icons">help</span>
    Information
  </div>
  <div class="admonition-content">
    <p>This is an information admonition. Use it to provide additional details or explanations that supplement the main content.</p>
  </div>
</div>

## Enhanced Code Blocks

### Single Code Block with Copy Button

<div class="code-block">
  <div class="code-block-header">
    <span class="code-block-language">Python</span>
    <div class="code-block-actions">
      <button class="code-copy-button" data-copy-code>
        <span class="material-icons">content_copy</span>
        <span class="copy-text">Copy</span>
      </button>
    </div>
  </div>
  <div class="code-block-content">
    <pre><code class="language-python"># SystemDS Python API Example
from systemds.context import SystemDSContext
from systemds.matrix import Matrix

# Create SystemDS context
sds = SystemDSContext()

# Create matrices
X = Matrix(sds, [[1, 2, 3], [4, 5, 6]])
Y = Matrix(sds, [[7, 8], [9, 10], [11, 12]])

# Perform matrix multiplication
result = X.dot(Y)
print(result.compute())</code></pre>
  </div>
</div>

### Multi-Language Code Tabs

<div class="code-tabs">
  <div class="code-tabs-header">
    <button class="code-tab-button active" data-tab="python">Python</button>
    <button class="code-tab-button" data-tab="java">Java</button>
    <button class="code-tab-button" data-tab="r">R</button>
    <button class="code-tab-button" data-tab="dml">DML</button>
  </div>
  
  <div class="code-tab-panel active" data-tab-panel="python">
    <div class="code-block">
      <div class="code-block-header">
        <span class="code-block-language">Python</span>
        <div class="code-block-actions">
          <button class="code-copy-button" data-copy-code>
            <span class="material-icons">content_copy</span>
            <span class="copy-text">Copy</span>
          </button>
        </div>
      </div>
      <div class="code-block-content">
        <pre><code class="language-python"># Linear regression in Python
from systemds.context import SystemDSContext
from systemds.operator.algorithm import lm

sds = SystemDSContext()
X = sds.read("data/X.csv")
y = sds.read("data/y.csv")

# Train linear regression model
model = lm(X, y)
print(model.compute())</code></pre>
      </div>
    </div>
  </div>
  
  <div class="code-tab-panel" data-tab-panel="java">
    <div class="code-block">
      <div class="code-block-header">
        <span class="code-block-language">Java</span>
        <div class="code-block-actions">
          <button class="code-copy-button" data-copy-code>
            <span class="material-icons">content_copy</span>
            <span class="copy-text">Copy</span>
          </button>
        </div>
      </div>
      <div class="code-block-content">
        <pre><code class="language-java">// Linear regression in Java
import org.apache.systemds.api.jmlc.Connection;
import org.apache.systemds.api.jmlc.PreparedScript;

Connection conn = new Connection();
PreparedScript script = conn.prepareScript(
    "X = read($X); y = read($y); " +
    "beta = lm(X, y); " +
    "write(beta, $B);"
);

script.setMatrix("X", X);
script.setMatrix("y", y);
script.executeScript();
double[][] beta = script.getMatrix("B");</code></pre>
      </div>
    </div>
  </div>
  
  <div class="code-tab-panel" data-tab-panel="r">
    <div class="code-block">
      <div class="code-block-header">
        <span class="code-block-language">R</span>
        <div class="code-block-actions">
          <button class="code-copy-button" data-copy-code>
            <span class="material-icons">content_copy</span>
            <span class="copy-text">Copy</span>
          </button>
        </div>
      </div>
      <div class="code-block-content">
        <pre><code class="language-r"># Linear regression in R
library(systemds)

sds <- systemds()
X <- sds$read("data/X.csv")
y <- sds$read("data/y.csv")

# Train linear regression model
beta <- sds$lm(X, y)
print(beta$compute())</code></pre>
      </div>
    </div>
  </div>
  
  <div class="code-tab-panel" data-tab-panel="dml">
    <div class="code-block">
      <div class="code-block-header">
        <span class="code-block-language">DML</span>
        <div class="code-block-actions">
          <button class="code-copy-button" data-copy-code>
            <span class="material-icons">content_copy</span>
            <span class="copy-text">Copy</span>
          </button>
        </div>
      </div>
      <div class="code-block-content">
        <pre><code class="language-dml"># Linear regression in DML
X = read("data/X.csv")
y = read("data/y.csv")

# Add intercept column
X = cbind(matrix(1, rows=nrow(X), cols=1), X)

# Calculate coefficients using normal equation
beta = solve(t(X) %*% X, t(X) %*% y)
print(toString(beta))</code></pre>
      </div>
    </div>
  </div>
</div>

## Enhanced Content Elements

### Tables

| Algorithm | Type | Scalability | Use Case |
|-----------|------|-------------|----------|
| Linear Regression | Supervised | High | Prediction, trend analysis |
| Logistic Regression | Supervised | High | Classification, probability estimation |
| K-Means | Unsupervised | Medium | Customer segmentation, clustering |
| PCA | Dimensionality Reduction | High | Feature reduction, visualization |
| Neural Networks | Deep Learning | Medium | Complex pattern recognition |

### Blockquotes

> SystemDS provides a comprehensive machine learning system that scales from single-node to distributed cluster environments. Its declarative approach allows data scientists to focus on the logic of their algorithms rather than implementation details.

### Definition Lists

Machine Learning Terms
: **Supervised Learning**
  Learning with labeled training data to make predictions on new, unseen data.

: **Unsupervised Learning**  
  Finding hidden patterns in data without labeled examples.

: **Feature Engineering**
  The process of selecting, modifying, or creating features from raw data to improve model performance.

: **Cross-Validation**
  A technique for assessing how well a model generalizes to unseen data by partitioning the dataset.

## Interactive Features

### Copy Code Functionality

All code blocks include a copy button that allows users to easily copy code examples to their clipboard. The button provides visual feedback when the code is successfully copied.

### Responsive Design

All content components are designed to work seamlessly across different screen sizes:

- **Desktop**: Full three-column layout with sidebar and TOC
- **Tablet**: Responsive layout with collapsible navigation
- **Mobile**: Stacked layout with touch-friendly interactions

<div class="admonition tip">
  <div class="admonition-title">
    <span class="material-icons">devices</span>
    Responsive Tip
  </div>
  <div class="admonition-content">
    <p>Try resizing your browser window to see how the layout adapts to different screen sizes. The navigation becomes a hamburger menu on smaller screens, and the table of contents can be toggled when needed.</p>
  </div>
</div>

---

*This content components demo showcases the rich formatting options available in the Android Design-inspired theme, making documentation both beautiful and functional.*