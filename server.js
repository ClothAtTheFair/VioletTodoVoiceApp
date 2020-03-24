const violet = require('violet').script();

const todoSvc = {
    getNextItem: function() {
        return "get the milk";
    },
    getCatchPhrase: function() {
        return "Yikes Forever"
    }
};

violet.addFlowScript(`
<app>
    <choice>
        <expecting>What's next on my todo</expecting>
        <say>Next item on your list is [[app.getNextItem()]]</say>
    </choice>
    <choice>
        <expecting>What is my catch phrase?</expecting>
        <say>Your catchphrase is [[app.getCatchPhrase()]]</say>
    </choice>
</app>`, {app: todoSvc});