{localSystem ? builtins.currentSystem, ...} @ args: let
  external_sources = import ./nix/sources.nix;

  adidoks-zola-theme = external_sources.adidoks-zola-theme.outPath;
  nixpkgs_import_args = {
    inherit localSystem;
    config = {};
  };
  nixpkgs = import external_sources.nixpkgs nixpkgs_import_args;

  buildBlog = nixpkgs.stdenv.mkDerivation {
    name = "aleksandergondek.github.io-blog";

    src = builtins.path {
      path = ./.;
      name = "aleksandergondek.github.io-blog-src";
    };

    nativeBuildInputs = [
      nixpkgs.zola
    ];

    buildPhase = ''
      rm -rf ./themes/*
      mkdir -p ./themes/adidoks
      cp -R  ${adidoks-zola-theme}/. ./themes/adidoks/
      zola build -o $out
    '';
  };

  devShell = nixpkgs.mkShell {
    name = "agondek-blog-dev-shell";

    packages = with nixpkgs; [
      alejandra
      cocogitto
      git
      helix
      niv
      statix
      zola
    ];

    shellHook = ''
      rm -rf ./themes
      mkdir ./themes
      ln -s -f ${adidoks-zola-theme} ./themes/adidoks
    '';
  };

  serveBlog = {};
in {
  inherit buildBlog devShell nixpkgs serveBlog;
}
