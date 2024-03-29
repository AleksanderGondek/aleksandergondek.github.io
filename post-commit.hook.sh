#! /usr/bin/env bash
#! set -euo pipefail
#
# Verify that what is committed is cosher.
# 

# Heavily inspired by: https://releases.nixos.org/nix/nix-2.20.1/install
oops() {
    echo "$0:" "$@" >&2
    exit 1
}

require_util() {
    command -v "$1" > /dev/null 2>&1 ||
        oops "you do not have '$1' installed, which I need to $2"
}

require_util alejandra "check nix files formatting"
require_util cog "check if commits match conventional commits specs"
require_util statix "check if nix code could be improved"
require_util zola "validate zola project"

# Redirect stdout to /dev/null
# in order to keep stdout clean for no-error scenarios
exec 1>/dev/null

alejandra -q check .
cog -q check
statix check .
zola check
