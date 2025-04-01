# Introduction

Welcome to the SDR project website. SDR is an DOE ECRP 2021 award, which aims to combine all the three critical aspects of data reduction for users, including data, requirement and technology, as shown in the following image.

<div class="flex-figures">
  <figure>
    <img src="/pages/images/data-reduction-arch.png" alt="isolated" style="max-width: 40%; height: auto;">
    <figcaption>Figure 1: Data Reduction Architecture</figcaption>
  </figure>
  <figure>
    <img src="/pages/images/data-reduction-models.png" alt="isolated" style="max-width: 60%; height: auto;">
    <figcaption>
      Figure 2: Data Reduction Models (<a href="https://example.com">lossy compression paper</a>)
    </figcaption>
  </figure>
</div>

## Background

Lossy compression is critical to the success of today's and future scientific discovery because of the extreme volumes of data produced by scientific applications or instruments. Existing error-bounded lossy compressors, however, suffer from two significant drawbacks: (1) they support only simple error controlling (such as absolute error bound) that does not match the user's requirements for preserving quantities of interest and features; and (2) existing general-purpose data compressors are developed based on static designs without adaptability to the diverse characteristics of application datasets. 

## Goal:

The overarching goal of this project is to develop a scalable scientific data reduction (SDR) framework which integrates multiple different lossy compression models. SDR allows users to select the best-qualified data reduction solution in terms of user requirements and dynamic data characteristics, significantly improving data reduction quality and performance over the existing general-purpose lossy compressors. 

## Thrusts

1. **Hybrid Optimization Framework**: SDR will use numerical analysis, machine learning, and deep learning to optimize the specific design for a broad range of data reduction techniques, which involves 6 different compression models, as shown in Figure 2.

2. **Online Model Selection**: The project will explore efficient machine learning based search algorithms to determine online the optimal data reduction solution (model and parameters). The core research and development includes efficient and accurate estimation of compression ratio and quality for different lossy compression models and compressors. 

3. **User-Centric Optimization**: The project will explore how to satisfy user-requirements (fidelity, speed, reduction ratio) efficiently and accurately. 

4. **Scalability and Evaluation**: SDR will support multiple parallel heterogeneous environments and will be evaluated comprehensively by using diverse scientific applications on DOE leadership-class supercomputers.

## Acknowledgement

This work was supported by the U.S. Department of Energy, Office of Science, Advanced Scientific Computing Research (ASCR), under contract DE-AC02-06CH11357.
