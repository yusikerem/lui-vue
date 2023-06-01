import LuiInput from './LuiInput.vue'
import type { Meta, StoryObj } from '@storybook/vue3'
import {
  size,
  state,
  description,
  block,
  rounded,
  stateIcon
} from '../../../.storybook/global-story-argtypes'

const descriptions = {
  docs: {
    component:
      'LuiInput allows users to input and interact with data, such as text, numbers, or selections, including features for validation and error handling.'
  },
  argTypes: {
    clear: '',
    prepend: 'Used to add a text to the right side of the icon',
    append: 'Used to add a text to the left side of the icon'
  }
}

const meta: Meta<typeof LuiInput> = {
  title: 'LUI/Input',
  component: LuiInput,
  argTypes: {
    block,
    rounded,
    size,
    description,
    state,
    stateIcon,
    clear: {
      control: 'boolean',
      options: [true, false],
      description: descriptions.argTypes.clear
    },
    prepend: {
      description: descriptions.argTypes.prepend
    },
    append: {
      description: descriptions.argTypes.append
    }
  },
  decorators: [() => ({ template: '<div class="space-x-2"><story/></div>' })],
  parameters: {
    docs: {
      description: { component: descriptions.docs.component }
    }
  }
}
export default meta

type Story = StoryObj<typeof LuiInput>

const defaultTemplate = '<lui-input placeholder="Type something" />'
export const Default: Story = {
  render: () => ({
    components: { LuiInput },
    template: defaultTemplate
  }),
  parameters: {
    docs: {
      source: {
        code: defaultTemplate
      },
      description: {
        story: 'This is how a default LuiInput looks.'
      }
    }
  }
}

const roundedTemplate = `
<lui-input :rounded="false" placeholder="Type something" />
<lui-input :rounded="true" placeholder="Type something" />
<lui-input rounded="full" placeholder="Type something" />
`
export const Rounded: Story = {
  render: () => ({
    components: { LuiInput },
    args: { rounded },
    template: `<div class="flex space-x-4">${roundedTemplate}</div>`
  }),
  parameters: {
    docs: {
      source: {
        code: roundedTemplate
      },
      description: {
        story: 'There are 3 options to round the corners of a LuiInput.'
      }
    }
  }
}

const blockTemplate = '<lui-input block placeholder="Type something" />'
export const Block: Story = {
  render: () => ({
    components: { LuiInput },
    args: { block },
    template: blockTemplate
  }),
  parameters: {
    docs: {
      source: {
        code: blockTemplate
      },
      description: {
        story: 'The <b>block</b> props provides a full width input look.'
      }
    }
  }
}

const sizeTemplate = `
<lui-input size="xs" placeholder="Type something" />
<lui-input size="sm" placeholder="Type something" />
<lui-input size="md" placeholder="Type something" />
<lui-input size="lg" placeholder="Type something" />
<lui-input size="xl" placeholder="Type something" />
`
export const Size: Story = {
  render: () => ({
    components: { LuiInput },
    args: { size },
    template: `<div class="flex flex-col space-y-2">${sizeTemplate}</div>`
  }),
  parameters: {
    docs: {
      source: {
        code: sizeTemplate
      },
      description: {
        story: 'There are 5 options to control the size of a LuiInput.'
      }
    }
  }
}

const clearTemplate = `<lui-input clear placeholder="Type something" />`
export const Clear: Story = {
  render: () => ({
    components: { LuiInput },
    template: clearTemplate
  }),
  parameters: {
    docs: {
      source: {
        code: clearTemplate
      },
      description: {
        story:
          'The <b>clear</b> props inserts a cross icon in the right side of the LuiInput and used to clear the input automatically when clicked.'
      }
    }
  }
}

const descriptionTemplate = `<lui-input description="This is a description" placeholder="Type something" />`
export const Description: Story = {
  render: () => ({
    components: { LuiInput },
    args: { description },
    template: descriptionTemplate
  }),
  parameters: {
    docs: {
      source: {
        code: descriptionTemplate
      },
      description: {
        story:
          'The <b>description</b> props is used to add a description to a LuiInput, typically used for validation and error handling.'
      }
    }
  }
}

const stateTemplate = `
<lui-input state="null" placeholder="Type something" />
<lui-input :state="true" description="This is a description" placeholder="Type something" />
<lui-input :state="false" description="This is a description" placeholder="Type something" />
<lui-input state="warning" description="This is a description" placeholder="Type something" />
`
export const State: Story = {
  render: () => ({
    components: { LuiInput },
    args: { state },
    template: `<div class="flex gap-x-4">${stateTemplate}</div>`
  }),
  parameters: {
    docs: {
      source: {
        code: stateTemplate
      },
      description: {
        story:
          'There are 4 states used for validation and error handling and they give a border of the state color to the LuiInput. When used with the <b>description</b> props they also change the color of the description.'
      }
    }
  }
}

const stateIconTemplate = `
<lui-input state-icon state="null" placeholder="Type something" />
<lui-input state-icon :state="true" placeholder="Type something" />
<lui-input state-icon :state="false" placeholder="Type something" />
<lui-input state-icon state="warning" placeholder="Type something" />
`
export const StateIcon: Story = {
  render: () => ({
    components: { LuiInput },
    args: { stateIcon },
    template: `<div class="flex gap-x-4">${stateIconTemplate}</div>`
  }),
  parameters: {
    docs: {
      source: {
        code: stateIconTemplate
      },
      description: {
        story:
          'The <b>state-icon</b> props is used with the <b>state</b> props for validation and error handling. It places an icon representing the valid state in the right side of the LuiInput.'
      }
    }
  }
}

const appendTemplate = `<lui-input placeholder="Type something">
  <template #append>
   <i class="ri-search-line" />
  </template>
</lui-input>`
export const Append: Story = {
  render: () => ({
    components: { LuiInput },
    template: appendTemplate
  }),
  parameters: {
    docs: {
      source: {
        code: appendTemplate
      },
      description: {
        story:
          'The <b>append</b> slot can be used to place an icon in the right side of the LuiInput.'
      }
    }
  }
}

const prependTemplate = `<lui-input placeholder="Type something">
  <template #prepend>
   <i class="ri-search-line" />
  </template>
</lui-input>`
export const Prepend: Story = {
  render: () => ({
    components: { LuiInput },
    args: { prepend },
    template: prependTemplate
  }),
  parameters: {
    docs: {
      source: {
        code: prependTemplate
      },
      description: {
        story:
          'The <b>prepend</b> slot can be used to place an icon in the left side of the LuiInput.'
      }
    }
  }
}
