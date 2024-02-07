{localSystem ? builtins.currentSystem, ...} @ args: let
  external_sources = import ./nix/sources.nix;
  nixpkgs_import_args = {
    inherit localSystem;
    config = {};
  };
  nixpkgs = import external_sources.nixpkgs nixpkgs_import_args;

  buildBlog = nixpkgs.stdenv.mkDerivation {
    name = "aleksandergondek.github.io-blog";

    # No sources
    dontUnpack = true;

    installPhase = ''
      mkdir $out
      touch $out/example
    '';
  };

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

  serveBlog = {};
in {
  inherit buildBlog devShell nixpkgs serveBlog;
}
