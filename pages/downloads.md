# Downloads

We have integrated the SDR components developed under this project into the Libpressio-featured framework, including Libpressio, Libpressio-predict, OptZConfig, etc.

We have integrated into Libpressio 30+ lossy and lossless compressors across multiple different compression models (such as transform-based model, prediction-based model, HOSVD model). We also support different devices such as CPU and GPU. The compressors supported by our platform include SZ2, SZ3, ZFP, MGARD, SPERR, QoZ/QoZ2, SZp, cuSZp/cuSZp2, SZx, FZ-GPU, FPZIP, Zstd, FPC, etc.

## Software/Library

- [Libpressio](https://github.com/robertu94/libpressio): A generic meta-compressor caller library, which has integrated OptZConfig as well.
- [LibpressioOpt/OptZConfig](https://github.com/robertu94/libpressio_opt): A plugin for libpressio that provides optimization routines to configure compressors.
- [Libpressio-predict](https://github.com/robertu94/libpressio-predict): A framework for predicting compression ratios for lossy compressors and other key metrics in a generic way using LibPressio.
- [cuSZp](https://github.com/szcompressor/cuSZp): An ultra-fast and user-friendly GPU error-bounded lossy compressor for floating-point data array (integrated into Libpressio)
- [FZ-GPU](https://github.com/szcompressor/FZ-GPU): A fast and high-ratio lossy compressor for scientific computing applications on GPU (integrated into Libpressio)
- [QoZ](https://github.com/szcompressor/QoZ/tree/main): Quality-oriented error-bounded lossy compressor  (integrated into Libpressio)
- [QoZ2.0](https://github.com/szcompressor/QoZ): Quality-oriented error-bounded lossy compressor version 2.0 (corresponding to the HPEZ paper: [HPEZ](https://dl.acm.org/doi/10.1145/3639259))  (integrated into Libpressio)
- [SZ 2](https://github.com/szcompressor/SZ): CPU version of SZ v2.1  (integrated into Libpressio)
- [SZ 1](https://github.com/szcompressor/SZ): CPU version of SZ v1.4 (integrated in v2.1; can be turned on in sz.config) (deprecated)
- [SZp](https://github.com/szcompressor/szp): The CPU version of cuSZp (supporting OpenMP)  (integrated into Libpressio)
- [cuSZ](https://github.com/szcompressor/cuSZ): CUDA version of SZ for GPUs  (integrated into Libpressio)
- [kSZ](https://github.com/szcompressor/kokkosSZ): A portable accelerator implementation of SZ using Kokkos programming model  
- [Interp-SZ/SZ3](https://github.com/szcompressor/SZ3): Spline-interpolation based error-bounded compressor  (integrated into Libpressio)
- [DeepSZ](https://github.com/szcompressor/DeepSZ): Deep neural network (DNN) model compressor  
- [SZauto](https://github.com/szcompressor/SZauto): SZ with automatic parameter optimization  
- [waveSZ](https://github.com/szcompressor/SZ_HLS): Vivado HLS implementation of SZ for Xilinx FPGAs  
- [vecSZ](https://github.com/szcompressor/vecSZ): Vectorized code based on the Single Instruction Multiple Data (SIMD) parallel paradigm  
- [SZ3](https://github.com/szcompressor/SZ3): SZ with loosely-coupled stages support easy customization  
- [Pastri-SZ](https://github.com/szcompressor/SZ): A lossy compressor optimized for GAMESS Two-electronic integrals datasets  (integrated into Libpressio)
- [Roibin-SZ](https://github.com/szcompressor/SZ): Roibin-SZ - customized for EXAFEL datasets (see `example/roibin_example` in SZ2.1 for details)  (integrated into Libpressio)
- [MMD-SZ](https://github.com/szcompressor/MMD-SZ): A lossy compressor optimized for Materials Molecular Dynamics Simulation Datasets  (integrated into Libpressio)
- [SZx](https://github.com/szcompressor/SZx): A superfast error-bounded compressor [requires special permission to access]  (integrated into Libpressio)
- [cpSZ](https://github.com/szcompressor/cpSZ): An SZ-based lossy compressor that preserves critical point feature for vector fields  
- [QCAT](https://github.com/szcompressor/qcat): Quick Compression Analysis Toolkit (partially integrated into Libpressio)
- [ZCCL](https://zccl.org): First-ever compression-accelerated collective communications library, which can directly communicate and compute with compressed data.

## Tracking Supported Capability in Libpressio

### 2020
- Jan 20, 2020 – created spack packages for LibPressio and OptZConfig. Created LibPressio-Opt/FRaZ/OptZConfig
- Feb 12, 2020 – Added support for user-defined metrics to LibPressio-Opt
- Feb 27, 2020 – Added MPI support to LibPressio-Opt

### 2021
- Jan 12, 2021 – added support for external metrics HTTP endpoints
- Feb 17, 2021 – added HDF5 filter support
- July 5, Added support for discrete choices to OptZConfig (e.g. which predictor)
- July 16, Added support for SZ2’s multi-threaded mode
- November 11, Added support for MGARD-GPU

### 2022
- January 17, Added `pressio:abs` and `pressio:rel`
- Feb 18, Added support for `pressio:pw_rel`
- June 22, Added support for MPI_COMM objects
- July 8, Added support for cuSZ
- Sept 8, Added SZx
- Oct 25, Added utility to compute HDF5 cd_vals
- Nov 18, Added `pressio:nthreads`

### 2023
- Jan 13, Created LibPressio dataset to test with entire datasets quickly
- May 25, Added support for Python based external metrics and compressors
- Aug 17, Integrated various metrics from QCat
- Aug 24, Wrote LibPressio-Predict to integrate compression prediction
- Sept 12, Added support for cuSZp

### 2024
- Jan 4, Added `predictors:*` interfaces to handle metrics validation
- Jan 4, Added support for cuSZx
- Feb 10, Added preliminary support for LibPressio-opt to LibPressio-predict
- March 4, Added support for domains

### 2025
- Support for multi-field external metrics

