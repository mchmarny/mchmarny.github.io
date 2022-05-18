window.addEventListener("load",function(){var e=document.getElementById("search-box");if(typeof e!="undefined"&&e!=null){const n=algoliasearch("AUAFKENXPK","61824d075cbd6c54986adbb9dcf965e9"),t=instantsearch({indexName:"blog",searchClient:n,routing:!1});t.addWidgets([instantsearch.widgets.configure({hitsPerPage:10}),instantsearch.widgets.searchBox({container:e,placeholder:"Search posts"}),instantsearch.widgets.hits({container:"#hits",templates:{item(e){return`
                        <div>
                            <div class="hit-title">
                                <a href="${e.relpermalink}" class="hit-url">
                                ${e.title}
                                </a>
                            </div>
                            <div class="hit-summary">
                                ${instantsearch.highlight({attribute:"summary",highlightedTagName:"mark",hit:e})}
                            </div>
                        </div>
                        `}}})]),t.start()}})