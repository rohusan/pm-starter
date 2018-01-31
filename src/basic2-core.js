import {EditorState, Plugin} from "prosemirror-state"
import {EditorView} from "prosemirror-view"
import {Schema as schema_model, DOMParser} from "prosemirror-model"
import {schema as schema_basic} from "prosemirror-schema-basic"
import {addListNodes} from "prosemirror-schema-list"
import {exampleSetup} from "prosemirror-example-setup"
import {undo, redo, history} from "prosemirror-history"
import {keymap} from "prosemirror-keymap"
import {baseKeymap, chainCommands, exitCode, toggleMark, setBlockType, wrapIn} from "prosemirror-commands"

export default {
	EditorState,
	EditorView,
	schema_model,
	DOMParser,
	schema_basic,
	addListNodes,
	exampleSetup,
	undo,
	redo,
	history,
	keymap,
	baseKeymap,
	chainCommands,
	exitCode,
	toggleMark,
	Plugin,
	setBlockType,
	wrapIn
}