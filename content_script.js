walk(document.body);

document.title = replaceText(document.title);

function walk(node)
{
	// I stole this function from here:
	// http://is.gd/mwZp7E

	var child, next;

	switch ( node.nodeType )
	{
		case 1:  // Element
		case 9:  // Document
		case 11: // Document fragment
			child = node.firstChild;
			while ( child )
			{
				next = child.nextSibling;
				walk(child);
				child = next;
			}
			break;

		case 3: // Text node
			handleText(node);
			break;
	}
}

function handleText(textNode) {
  textNode.nodeValue = replaceText(textNode.nodeValue);
}

function replaceText(v)
{
	// Taylor
//	v = v.replace(/\bOpen Data Institute\b/g, "Taylor Swift Institute");
	v = v.replace(/\bODI\b/g, "TSI");
	v = v.replace(/\b(O|o)pen (D|d)ata\b/g, "Taylor Swift");
	v = v.replace(/(O|o)pen(D|d)ata/g, "TaylorSwift");
	v = v.replace(/\bOPEN DATA\b/g, "TAYLOR SWIFT");
	v = v.replace(/OPENDATA/g, "TAYLORSWIFT");

	return v;
}
