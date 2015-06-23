goog.provide('MICO.Utils');

goog.require('goog.editor.Command');
goog.require('goog.editor.Field');
goog.require('goog.editor.plugins.BasicTextFormatter');
goog.require('goog.editor.plugins.EnterHandler');
goog.require('goog.editor.plugins.HeaderFormatter');
goog.require('goog.editor.plugins.LinkBubble');
goog.require('goog.editor.plugins.LinkDialogPlugin');
goog.require('goog.editor.plugins.ListTabHandler');
goog.require('goog.editor.plugins.LoremIpsum');
goog.require('goog.editor.plugins.RemoveFormatting');
goog.require('goog.editor.plugins.SpacesTabHandler');
goog.require('goog.editor.plugins.UndoRedo');
goog.require('goog.ui.decorate');
goog.require('goog.ui.editor.DefaultToolbar');
goog.require('goog.ui.editor.ToolbarController');

//todo: //
MICO.Utils.renderTextEditor = function(textFieldId, toolbarFieldId) {

    var descriptionField = new goog.editor.Field(textFieldId);

    // Create and register all of the editing plugins you want to use.
    descriptionField.registerPlugin(new goog.editor.plugins.BasicTextFormatter());
    descriptionField.registerPlugin(new goog.editor.plugins.RemoveFormatting());
    descriptionField.registerPlugin(new goog.editor.plugins.UndoRedo());
    descriptionField.registerPlugin(new goog.editor.plugins.ListTabHandler());
    descriptionField.registerPlugin(new goog.editor.plugins.SpacesTabHandler());
    descriptionField.registerPlugin(new goog.editor.plugins.EnterHandler());
    descriptionField.registerPlugin(new goog.editor.plugins.HeaderFormatter());
    descriptionField.registerPlugin(
        new goog.editor.plugins.LoremIpsum('Click here to edit'));
    descriptionField.registerPlugin(
        new goog.editor.plugins.LinkDialogPlugin());
    descriptionField.registerPlugin(new goog.editor.plugins.LinkBubble());

    // Specify the buttons to add to the toolbar, using built in default buttons.
    var buttons = [
        goog.editor.Command.BOLD,
        goog.editor.Command.ITALIC,
        goog.editor.Command.UNDERLINE,
        goog.editor.Command.FONT_COLOR,
        goog.editor.Command.BACKGROUND_COLOR,
        goog.editor.Command.FONT_FACE,
        goog.editor.Command.FONT_SIZE,
        goog.editor.Command.LINK,
        goog.editor.Command.UNDO,
        goog.editor.Command.REDO,
        goog.editor.Command.UNORDERED_LIST,
        goog.editor.Command.ORDERED_LIST,
        goog.editor.Command.INDENT,
        goog.editor.Command.OUTDENT,
        goog.editor.Command.JUSTIFY_LEFT,
        goog.editor.Command.JUSTIFY_CENTER,
        goog.editor.Command.JUSTIFY_RIGHT,
        goog.editor.Command.SUBSCRIPT,
        goog.editor.Command.SUPERSCRIPT,
        goog.editor.Command.STRIKE_THROUGH,
        goog.editor.Command.REMOVE_FORMAT
    ];

    var descriptionEditor = null;

    var toolboxElement = goog.dom.getElement(toolbarFieldId);
    if (toolboxElement) {
        var descriptionEditorToolbox = goog.ui.editor.DefaultToolbar.makeToolbar(
                                        buttons,
                                        toolboxElement);

        // Hook the toolbar into the field.
        descriptionEditor = new goog.ui.editor.ToolbarController(
                                    descriptionField,
                                    descriptionEditorToolbox);
    }

    descriptionField.makeEditable();

    return descriptionEditor;

};
