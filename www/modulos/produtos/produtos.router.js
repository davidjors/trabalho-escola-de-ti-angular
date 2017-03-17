    angular
        .module('produtos')
        .config(config)
        function config($stateProvider){
            $stateProvider
                .state('produtosLista', {
                    url: '/produtos/lista',
                    controller: 'ProdutosController',
                    templateUrl: './modulos/produtos/produtos.lista.html'
                })
                .state('produtosCriar', {
                    url: '/produtos/criar',
                    controller: 'ProdutosCriarController',
                    templateUrl: './modulos/produtos/produtos.criar.html'
                })
        }
