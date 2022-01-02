window.addEventListener("load",function(){var a=document.getElementById('search-box');if(typeof a!='undefined'&&a!=null){const c=algoliasearch('AUAFKENXPK','61824d075cbd6c54986adbb9dcf965e9'),b=instantsearch({indexName:'blog',searchClient:c,routing:!1});b.addWidgets([instantsearch.widgets.configure({hitsPerPage:10}),instantsearch.widgets.searchBox({container:a,placeholder:'Search posts'}),instantsearch.widgets.hits({container:'#hits',templates:{item:`
                        <div>
                            <div class="hit-title">
                                <a href="{{#helpers.highlight}}{ "attribute": "url" }{{/helpers.highlight}}" class="hit-url">
                                    {{#helpers.highlight}}{ "attribute": "title" }{{/helpers.highlight}}
                                </a>
                            </div>
                            <div class="hit-summary">
                                {{#helpers.highlight}}{ "attribute": "summary" }{{/helpers.highlight}}
                            </div>
                        </div>
                    `}})]),b.start()}})