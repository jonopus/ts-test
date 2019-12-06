// selecting autocomplete should add `import { computed } from "@ember/object";` from @types/ember

class Index {
    @computed/* ctrl + space here offers suggestions in typescript@3.6.3 but not in  typescript@3.7.3 */
    get foo() {
        return '';
    }
}
