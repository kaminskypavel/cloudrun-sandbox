import {action, computed, makeAutoObservable} from "mobx";
import snippets from "../snippets";

class Store {
    snippetName: string = snippets[0].name;
    isDark: boolean = true;
    editorValue: string = "";
    evaluated: string = "";

    constructor() {
        makeAutoObservable(this)
    }

    @computed
    get selectedSnippet() {
        return snippets.find(s => s.name === this.snippetName)!
    }

    @computed
    get language() {
        return this.selectedSnippet?.language
    }

    @action
    setEditorValue(value: string) {
        console.log(1,value);
        this.editorValue = value;
    }

    @action
    setEvaluated(value: string) {
        this.evaluated = value;
    }

    @action
    setSnippetName(value: string) {
        this.snippetName = value;
        this.setEditorValue(this.selectedSnippet.value)
    }

    @action
    setIsDarkTheme(value: boolean) {
        this.isDark = value;
    }

}

export default new Store();

