window.addEventListener("load",function(){var a=document.getElementById('search-box');if(typeof a!='undefined'&&a!=null){const c=algoliasearch('AUAFKENXPK','61824d075cbd6c54986adbb9dcf965e9'),b=instantsearch({indexName:'blog',searchClient:c,routing:!1});b.addWidgets([instantsearch.widgets.configure({hitsPerPage:10}),instantsearch.widgets.searchBox({container:a,placeholder:'Search posts'}),instantsearch.widgets.hits({container:'#hits',templates:{item(a){return console.log(a),`
                        <div>
                            <div class="hit-title">
                                <a href="${a.relpermalink}" class="hit-url">
                                ${a.title}
                                </a>
                            </div>
                            <div class="hit-summary">
                                ${instantsearch.highlight({attribute:'summary',highlightedTagName:'mark',hit:a})}
                            </div>
                        </div>
                        `}}})]),b.start()}})