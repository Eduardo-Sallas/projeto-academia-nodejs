(function(){

    'use strict';

    //recuperando o módulo criado pelo angular angular.module("unidescApp", []);
    
    var unidescApp = angular.module("unidescApp");

    //Definir uma controller para esse módulo, o segundo parâmetro representa a função que vai tratar esse controller
    unidescApp.controller('produtoController', produtoController);

    //injetandoa s dependencias dessa controller. No caso apenas o $scope
    produtoController.$inject = ['$scope', '$http'];

    function produtoController($scope, $http){

        //encapsulando o this
        var vm = this;

        var HOST_HTTP = "http://localhost:3000";

        //inicializando as minhas
        vm.produto = {};
        vm.produtos = [];

        vm.init = function(){
            vm.listarProdutos();
        };

        vm.listarProdutos = function(){
            $http.get(HOST_HTTP + '/produtos').then(
            function(response){
                vm.produtos = response.data;
                console.log(response);
             },
             function(err){
                console.log(err);
             }
            );
        };

        vm.adicionarProduto = function(){
            if(vm.produto.id === undefined){
                vm.produtos.push(angular.copy(vm.produto));
            }
            else{
                vm.atualizarProduto(vm.produto.id);
            }

            vm.limparCampos();

            console.log(vm.produtos);   
        };

        vm.salvarProdutoBaseDados = function(){
            $http.post(HOST_HTTP + '/produtos', vm.produto).then(
                function(response){
                    vm.produtos.push(vm.produto);
                    vm.limparCampos();
                    console.log(response);
                 },
                 function(err){
                    console.log(err);
                 }
                );
        };

        vm.limparCampos = function(){
            vm.produto = {};
        };
        
        vm.deletarProduto = function(item){
            console.log(item);
            vm.produtos.splice(item,1);
        };
            vm.carregarProduto = function(item){
                vm.produto = angular.copy(vm.produtos[item]);
                vm.produto.id = item;

                console.log(vm.produto);
            };

            vm.atualizarProduto = function(item){
                vm.produtos[item] = angular.copy(vm.produto);
            };    
    }
}());