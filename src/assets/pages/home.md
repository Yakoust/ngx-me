<!---
path: home
rank: 1
title: Marest Damien
category: Accueil
shortDescription: Présentation
tags:
  - accueil
keywords:
  - prod
  - continuous
  - delivery
--->

# Versions and Patch Management

## Preferred Case: Mono-PROD, Continuous Delivery

- Acceptance Tests can be done in Sprint N+1 and deployed.
- If a version is rejected, fixes are performed in VN+1 and acceptance starts again with VN+1.
- Developers only work within a sprint and deploy at the end of a sprint.
- Patches deployed as hotfixes shall be exceptions for blocking issues in PROD. No new feature. Release of a new version is preferred.

## Mono-PROD, Continuous Delivery with a longer Acceptance Phase

- Acceptance Tests need several dev sprints.
- If a version is rejected, fixes are performed in VN+X and acceptance starts again with VN+X.
- Developers only work within a sprint and deploy when acceptance is ready.
- Patches deployed as hotfixes shall be exceptions for blocking issues in PROD. No new feature. Release of a new version is preferred.

## Mono-PROD, Multiple Acceptance Phases

- Acceptance Tests need several dev sprints.
- There are several levels of acceptance: several versions can be tested at the same time.
- There cannot be more than 3 versions managed (1 PROD + 2 Acceptance).
- Patches deployed as hotfixes shall be exceptions for blocking issues in intermediate Acceptance Environments and PROD. No new feature. Release of a new version is preferred.
- For a patch, if a fix costs Y
  - coding, validating and propagating it in VN-1 costs Y
  - coding, validating and propagating it in VN-2 costs more than 2 x Y
  - coding, validating and propagating it in VN-3 costs more than 3 x Y
  
## Multi-PROD

This is the case when multiple deployments with different versions exist at the same time.

- Integrating changes in multi-PROD environments shall be performed through deployed of new and recent versions.
- Patches deployed as hotfixes can only be required on 1 PROD (then propagated to main DEV branch - MASTER, but not the other PRODs).
- Patches deployed as hotfixes should be preferrably bug fixes (cost = more than 2 x normal cost).
- Patches deployed as hotfixes / hotfeats can be new features but their feasibility needs to be evaluated first (estimation of obsolescence), and effort estimation shall include propagation to main DEV branch - MASTER.
