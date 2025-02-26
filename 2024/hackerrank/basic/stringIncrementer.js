
function incrementString(text = ""){
    const reversedString = text.split("").reverse().findIndex(char => /[0-9]/.test(char));

    console.log(reversedString);
}

incrementString("foobar000"); // "foobar001"
incrementString("foobar999"); // "foobar1000"
incrementString("foobar00999"); // "foobar01000"

// doTest("foobar000", "foobar001");
// doTest("foobar999", "foobar1000");
// doTest("foobar00999", "foobar01000");
// doTest("foo", "foo1");
// doTest("foobar001", "foobar002");
// doTest("foobar1", "foobar2");
// doTest("1", "2");
// doTest("009", "010");
// doTest("fo99obar99", "fo99obar100");