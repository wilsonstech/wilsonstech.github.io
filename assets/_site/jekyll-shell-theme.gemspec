# frozen_string_literal: true

Gem::Specification.new do |spec|
  spec.name          = "Matthews-Project-Vault"
  spec.version       = "0.1.1"
  spec.authors       = ["Matt-Smith"]
  spec.email         = ["matthew.a.smith1999@outlook.com"]

  spec.summary       = "Built BY me"
  spec.homepage      = "https://wilsonstech.github.io"
  spec.license       = "MIT"

  spec.files         = `git ls-files -z`.split("\x0").select { |f| f.match(%r!^(assets|_layouts|_includes|_sass|LICENSE|README)!i) }

  spec.add_runtime_dependency "jekyll", ">= 3.8.5"

  spec.add_development_dependency "bundler", ">= 2.0"
  spec.add_development_dependency "rake", ">= 10.0"
end
