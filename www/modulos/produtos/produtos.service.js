    angular
        .module('produtos')
        .factory('ProdutosService', ProdutosService )
        
        function ProdutosService(){
            var listaProdutos =[];
            var service ={
                salvarProduto : salvarProduto,
                obterProdutos : obterProdutos,
                apagarProduto : apagarProduto
                
            }
            function salvarProduto(produto){
                var produtosalvar = angular.copy(produto)
                listaProdutos.push(produtosalvar);
            }
            function obterProdutos(){
                return listaProdutos;
            }
            function apagarProduto(produto){
               console.log(produto)
                listaProdutos = listaProdutos.filter(p => p.codigo != produto.codigo);
                return listaProdutos;
            }
            return service;
        }