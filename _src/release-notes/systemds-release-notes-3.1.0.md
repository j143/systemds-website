---
layout: page
title: SystemDS 3.1.0 Release Notes
description: Project Release Notes
group: nav-right
---
<!--
{% comment %}
Licensed to the Apache Software Foundation (ASF) under one or more
contributor license agreements.  See the NOTICE file distributed with
this work for additional information regarding copyright ownership.
The ASF licenses this file to you under the Apache License, Version 2.0
(the "License"); you may not use this file except in compliance with
the License.  You may obtain a copy of the License at

http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
{% endcomment %}
-->

<section class="full-stripe full-stripe--subpage-header clear-header">
  <div class="ml-container ml-container--horizontally-center">
    <div class="col col-12 content-group content-group--center-content content-group--center-align">
      <h1>{{ site.data.project.name }} 3.1.0 Release Notes</h1>
    </div>
  </div>
</section>

<section class="full-stripe full-stripe--alternate">
  <div class="ml-container">
    <div class="col col-12 content-group content-group--medium-bottom-margin" markdown="1">

## Release notes for SystemDS 3.1.0

SystemDS 3.1 is a minor release. Release 3.1 contains new features and major improvements to existing features.

### Features and Improvements

[SYSTEMDS-2411] - Performance codegen kmeans mnist80m w/ compression
[SYSTEMDS-3088] - Prefetch instruction
[SYSTEMDS-3098] - Broadcast instruction
[SYSTEMDS-3256] - Create apply functions for cleaning primitives
[SYSTEMDS-3286] - LogicalEnumerator change with transitions concept and cleanups
[SYSTEMDS-3347] - Flatten the nested loop for parallel pipelines execution
[SYSTEMDS-3376] - Adding apply_pipeline() builtin for cleaning pipelines API
[SYSTEMDS-3401] - Release docker images with GitHub actions
[SYSTEMDS-3422] - Add monitoring tool testing workflows
[SYSTEMDS-3443] - Asynchronous Execution and Persist Spark Transformations
[SYSTEMDS-3466] - Future-based asynchronous execution of Spark actions
[SYSTEMDS-3469] - New operator linearization order to maximize inter-operator parallelism
[SYSTEMDS-3470] - Lineage-based reuse of Spark actions
[SYSTEMDS-3473] - Push down rmvar instructions for asynchronous instructions
[SYSTEMDS-3474] - Lineage-based reuse of asynchronous operators
[SYSTEMDS-3479] - Persist and reuse Spark RDDs
[SYSTEMDS-3497] - Refactor to add LOP rewrite step in compilation
[SYSTEMDS-2551] - Federated Compression Instruction
[SYSTEMDS-2699] - CLA IO Compressed Matrices
[SYSTEMDS-2754] - Compressed Max/Min Index support.
[SYSTEMDS-3360] - Federated async compression
[SYSTEMDS-3361] - Federated Workload-aware Compression
[SYSTEMDS-3494] - Python 3.9 support
[SYSTEMDS-3495] - Parallel Compressed Encode
[SYSTEMDS-3496] - New builtin function auc (area under ROC curve)

## Bug

[SYSTEMDS-1026] - Fix memory configuration in sparkDML.sh
[SYSTEMDS-1281] - OOM Error On Binary Write
[SYSTEMDS-1283] - Out of memory error
[SYSTEMDS-2948] - CLA Improved Run estimation
[SYSTEMDS-3045] - AttributeError: Function definition not found
[SYSTEMDS-3272] - applySchema built-in to set the schema of frame from DML
[SYSTEMDS-3339] - CSR TSMM left with filled rows bug
[SYSTEMDS-3353] - Sparse TSMM dense row blocks CSR
[SYSTEMDS-3354] - py4j.Py4JException: Method exceptionString([class org.apache.spark.SparkConf]) does not exist
[SYSTEMDS-3355] - MatrixBlock size using CSR when allowed
[SYSTEMDS-3379] - Federated Nan Values
[SYSTEMDS-3390] - countDistinctApprox() operation in AggregateUnaryCPInstruction is inefficient for row/col aggregations
[SYSTEMDS-3391] - Correct the release artifact generation date
[SYSTEMDS-3394] - Log4j incompatible dependencies
[SYSTEMDS-3396] - ConcurrentModificationException in federated execution
[SYSTEMDS-3398] - Jackson Core missing for json writing and reading in reduced binary
[SYSTEMDS-3400] - Fix Java doc warnings
[SYSTEMDS-3408] - Enque output not UTF-8 python
[SYSTEMDS-3409] - Read CSV directly without mtd python
[SYSTEMDS-3411] - Python configuration not loading defaults
[SYSTEMDS-3412] - Matrix Multiplication crash in Spark
[SYSTEMDS-3414] - Pipelines failing in Hybrid execution
[SYSTEMDS-3415] - Built-in tests failure in Git actions
[SYSTEMDS-3416] - Cleaning Pipelines failed with No space left on device
[SYSTEMDS-3417] - IndexOutOfBounds due to int overflow on replace
[SYSTEMDS-3418] - Cleaning Pipelines: Replace function failure in hybrid execution
[SYSTEMDS-3419] - Cleaning Pipelines: Block Sizes mismatch
[SYSTEMDS-3420] - Cleaning Pipelines in hybrid mode: Invalid block dimensions error
[SYSTEMDS-3424] - Federated Statistics print in non federated scenario
[SYSTEMDS-3425] - Spark Aggregate Binary operations parse to Fed instruction
[SYSTEMDS-3432] - FederationUtils.bindResponses causes out of memory because of sparse matrices.
[SYSTEMDS-3433] - Python IDE test Docs fail
[SYSTEMDS-3435] - MSVM robustness for non-existing classes
[SYSTEMDS-3436] - CLA ArrayOutOfBounds in sample
[SYSTEMDS-3437] - CLA Invalid Unique estimate DDC
[SYSTEMDS-3439] - Federated read cache cannot be disabled
[SYSTEMDS-3442] - Monitoring Heavy hitters not always correct list
[SYSTEMDS-3451] - Slow Federated Mlogreg on Criteo (dummy-coded)
[SYSTEMDS-3452] - Incorrect warning when reading scalars
[SYSTEMDS-3476] - Spark with default settings
[SYSTEMDS-3477] - Cleaning Pipelines: Task Parallel Experiments failing in spark mode
[SYSTEMDS-3498] - Unique() crashes with iterator EOF on vectors with >1K distinct items
[SYSTEMDS-3500] - Perftest: Mlogreg on 1M_1k_dense w/ unnecessary spark jobs
[SYSTEMDS-3501] - Perftest: lmDS on 1M_1k_dense with unnecessary spark tsmm
[SYSTEMDS-3503] - Java doc warnings
