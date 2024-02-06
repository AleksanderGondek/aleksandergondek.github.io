{localSystem ? builtins.currentSystem, ...} @ args: let
  external_sources = import ./nix/sources.nix;
  nixpkgs_import_args = {
    inherit localSystem;
    config = {};
  };
  nixpkgs = import external_sources.nixpkgs nixpkgs_import_args;

  devShell = nixpkgs.mkShell {
    name = "agondek-blog-dev-shell";
    packages = with nixpkgs; [
      alejandra
      helix
      niv
      statix
      zola
    ];
  };
in {
  inherit devShell;
}
