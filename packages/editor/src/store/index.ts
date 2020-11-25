import {action, computed, makeAutoObservable} from "mobx";
import snippets from "../snippets";
import axios from "axios";

class Store {
    snippetName: string = snippets[0].name;
    isDark: boolean = true;
    editorValue: string = "";
    evaluated: string = "";
    endpoint:string = "http://localhost:8080/eval"

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

    @action
    setEndpoint(value: string) {
        this.endpoint = value;
    }

    @action
    async execute() {
        console.log(11,"execute");
        const {data} = await axios.post(this.endpoint, {script: this.editorValue, language: this.language});
        console.log(22,data);
        this.setEvaluated(JSON.stringify(data, null, 4))

    }

}

export default new Store();

