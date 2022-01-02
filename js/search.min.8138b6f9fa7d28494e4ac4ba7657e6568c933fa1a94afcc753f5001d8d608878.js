const searchClient=algoliasearch('AUAFKENXPK','61824d075cbd6c54986adbb9dcf965e9'),search=instantsearch({indexName:'blog',searchClient,routing:!0});search.addWidgets([instantsearch.widgets.configure({hitsPerPage:10}),instantsearch.widgets.searchBox({container:'#search-box',placeholder:'Search posts'}),instantsearch.widgets.hits({container:'#hits',templates:{item:`
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
            `}})]),search.start()