A halton sequence implementation in js.

## Classes

<dl>
<dt><a href="#haltonSequence">haltonSequence</a></dt>
<dd><p>A 2D halton sequence generator.</p>
</dd>
<dt><a href="#vanDerCorput">vanDerCorput</a></dt>
<dd><p>A Van der Corput sequence generator.</p>
</dd>
</dl>

<a name="haltonSequence"></a>

## haltonSequence
A 2D halton sequence generator.

**Kind**: global class  

* [haltonSequence](#haltonSequence)
    * [new haltonSequence([base1], [base2], [seed])](#new_haltonSequence_new)
    * [.getNext()](#haltonSequence+getNext) ⇒ <code>Object</code>

<a name="new_haltonSequence_new"></a>

### new haltonSequence([base1], [base2], [seed])
Constructor


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [base1] | <code>Number</code> | <code>2</code> | The first base. |
| [base2] | <code>Number</code> | <code>3</code> | The second base. |
| [seed] | <code>Number</code> | <code>1</code> | The seed to start the sequence index with. |

<a name="haltonSequence+getNext"></a>

### haltonSequence.getNext() ⇒ <code>Object</code>
Get the next 2d element from the halton sequence.

**Kind**: instance method of [<code>haltonSequence</code>](#haltonSequence)  
**Returns**: <code>Object</code> - The element in form {x,y}.  
<a name="vanDerCorput"></a>

## vanDerCorput
A Van der Corput sequence generator.

**Kind**: global class  

* [vanDerCorput](#vanDerCorput)
    * [new vanDerCorput([base], [index])](#new_vanDerCorput_new)
    * [.compute(i, b)](#vanDerCorput+compute) ⇒ <code>Number</code>
    * [.getNext()](#vanDerCorput+getNext) ⇒ <code>Number</code>

<a name="new_vanDerCorput_new"></a>

### new vanDerCorput([base], [index])
Constructor


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [base] | <code>Number</code> | <code>2</code> | The base. |
| [index] | <code>Number</code> | <code>1</code> | The index to start the sequence with. |

<a name="vanDerCorput+compute"></a>

### vanDerCorput.compute(i, b) ⇒ <code>Number</code>
Compute the given result at an index and base.

**Kind**: instance method of [<code>vanDerCorput</code>](#vanDerCorput)  
**Returns**: <code>Number</code> - The computed value of the element at the index and base.  

| Param | Type | Description |
| --- | --- | --- |
| i | <code>Number</code> | The index. |
| b | <code>Number</code> | The base. |

<a name="vanDerCorput+getNext"></a>

### vanDerCorput.getNext() ⇒ <code>Number</code>
Get the next element from the sequence.

**Kind**: instance method of [<code>vanDerCorput</code>](#vanDerCorput)  
**Returns**: <code>Number</code> - The next element.  
