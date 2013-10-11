test('add will append another person to the html table', function() {
    App.Person.people = [];
    App.reset();
    visit("/").then(function() {
        var rows = find("table tr").length;
        equal(rows, 2, "the table had " + rows + " rows");
        fillIn(".firstName", "foo");
        fillIn(".lastName", "bar");
        return click(".submit");
    }).then(function() {
        var rows = find("table tr").length;
        equal(rows, 3, "the table had " + rows + " rows");
        equal(find("table tr:eq(2) td:eq(0)").text(), "foo bar", "the fullName for the person was incorrect");
    });
});

test('delete will remove the person for a given row', function() {
    App.Person.people = [];
    App.reset();
    visit("/").then(function() {
        var rows = find("table tr").length;
        equal(rows, 2, "the table had " + rows + " rows");
        return click("table .delete:first");
    }).then(function() {
        equal(find("table tr").length, 1, "the table of people was not complete");
    });
});
