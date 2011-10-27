test('a test', function () {
    ok(true, "always fine");
});
test('primitive', function () {
    expect(7);
    ok(bool, 'bool');
    deepEqual(num, 1, 'num');
    notDeepEqual(num, '1', 'num is not String');
    deepEqual(str, 'a', 'str');
    deepEqual(obj, {}, 'obj');
    strictEqual(obj, obj2, 'obj referensed obj2');
    notStrictEqual(obj, {}, 'obj is not {}');
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
asyncTest('getJSON', function () {
    expect(1);
    loadTestBox();
    setTimeout(function () {
        deepEqual($('#testBox').text(), 'json data');
        start();
    }, 100);
});

asyncTest('click', function () {
    expect(1);
    $('#clickTestBox').click();
    setTimeout(function () {
        deepEqual($('#testBox').text(), 'click');
        start();
    }, 100);
});
test('hover', function () {
    expect(2);
    var overFunc = function () {
        deepEqual($('#hoverTestBox').text(), 'hover');
    };
//    $('#hoverTestBox').bind('mouseover', overFunc).trigger('mouseover').unbind('mouseover', overFunc);
    $('#hoverTestBox').mouseover();
    overFunc();
    $('#hoverTestBox').mouseout();
    deepEqual($('#hoverTestBox').text(), 'out');
});

module('module1', {
    setup: function () {
        console.log('module1 setup...');
    },
    teardown: function () {
        console.log('module1 teardown...');
    }
});
test('module1 dummmy', function () {
    expect(0);
    console.log('module1 dummy');
});

