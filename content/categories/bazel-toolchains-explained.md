+++
title = "Bazel toolchains explained"
description = "Hands-on exploration and breakdown"
date = 2024-02-27T09:30:00+01:00
updated = 2024-02-27T09:30:00+01:00
draft = true
+++

Toolchains and especially their resolution mechanism are powerful tools that allow Bazel rules to abstract over platform-specific details. Unfortunately they are frequently ill understood and treated as necessary evil (oftentimes circumvented) instead of being used as intended.

In this series I intend to do a deep-dive with practical examples, to explain what the Bazel toolchains are and how they work.
