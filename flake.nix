{
  description = "aleksandergondek.github.io developer environment.";

  # As personally, I am not too keen on the flake mechanism
  # this files is a simple shim, created for compatiblity.
  # All actual logic is bound to default.nix.
  inputs = {};

  outputs = {self}: let
    supportedSystems = ["x86_64-linux" "x86_64-darwin" "aarch64-linux" "aarch64-darwin"];
    forSupportedSystems = f: builtins.map f supportedSystems;
    definePackages = system: {
      name = system;
      value = {default = (import ./default.nix {localSystem = system;}).buildBlog;};
    };
    defineDevShells = system: {
      name = system;
      value = {default = (import ./default.nix {localSystem = system;}).devShell;};
    };
  in {
    packages = builtins.listToAttrs (forSupportedSystems definePackages);
    devShells = builtins.listToAttrs (forSupportedSystems defineDevShells);
  };
}
