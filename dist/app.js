!function(){"use strict";angular.module("unidescApp",[])}(),function(){"use strict";function produtoController($scope,$http){var vm=this;vm.produto={},vm.produtos=[],vm.init=function(){vm.listarProdutos()},vm.listarProdutos=function(){$http.get("http://localhost:3000/produtos").then(function(response){vm.produtos=response.data,console.log(response)},function(err){console.log(err)})},vm.adicionarProduto=function(){void 0===vm.produto.id?vm.produtos.push(angular.copy(vm.produto)):vm.atualizarProduto(vm.produto.id),vm.limparCampos(),console.log(vm.produtos)},vm.salvarProdutoBaseDados=function(){$http.post("http://localhost:3000/produtos",vm.produto).then(function(response){vm.produtos.push(vm.produto),vm.limparCampos(),console.log(response)},function(err){console.log(err)})},vm.limparCampos=function(){vm.produto={}},vm.deletarProduto=function(item){console.log(item),vm.produtos.splice(item,1)},vm.carregarProduto=function(item){vm.produto=angular.copy(vm.produtos[item]),vm.produto.id=item,console.log(vm.produto)},vm.atualizarProduto=function(item){vm.produtos[item]=angular.copy(vm.produto)}}angular.module("unidescApp").controller("produtoController",produtoController),produtoController.$inject=["$scope","$http"]}();