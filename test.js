test('a test', function () {
    ok(true, "always fine");
});
test('primitive', function () {
    expect(7);
    ok(bool);
    deepEqual(num, 1);
    notDeepEqual(num, '1');
    deepEqual(str, 'a');
    deepEqual(obj, {});
    strictEqual(obj, obj2);
    notStrictEqual(obj, {});
});
test('raises', function () {
    expect(1);
    raises(function () {
        throw new Error();
    }, 'throw error');
});
test('function', function () {
    expect(1);
    ok(returnTrue());
});
asyncTest('async', function () {
    expect(1);
    setTimeout(function () {
        ok(true);
        start();
    }, 10);
});
module('module1', {
    setup: function () {
        console.log('module1 setup...');
    },
    teardown: function () {
        console.log('module1 teardonw...');
    }
});
test('module1 dummmy', function () {
    expect(0);
    console.log('module1 dummy');
});

