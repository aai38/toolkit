import { setCompodocJson } from "@storybook/addon-docs/angular";
import docJson from "../documentation.json";

import { addParameters } from '@storybook/angular'; // or any other type of storybook



setCompodocJson(docJson);


export const parameters = {
    actions: { argTypesRegex: "^on[A-Z].*" },
}