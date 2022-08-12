import { defineComponent, PropType, toRefs } from "vue";
import 'uno.css'

export type IColor = 'black' | 'gray' | 'red' | 'yellow' | 'green' | 'blue' | 'indigo' | 'purple' | 'pink'
export const props = {
    color: {
        type: String as PropType<IColor>,
        defalut: 'blue'
    },
    icon: {
        type: String,
        default: ''
    },
    size: {
        type: String,
        default: ''
    }
}

export default defineComponent({
    name: 'SButton',
    props,
    setup(props, {slots}) {
        console.log('🤔 ~ file: index.tsx ~ line 24 ~ setup ~ props', props)
        return () => (
            <button class={`
                py-2 
                px-4 
                font-semibold 
                rounded-lg 
                shadow-md 
                text-white 
                bg-${props.color}-500 
                hover:bg-${props.color}-700 
                border-none 
                cursor-pointer 
                m-1
            `}>
                { props.icon !== '' ? <i class={`i-ic-baseline-${props.icon} p-3`}></i> : '' }
                { slots.default?.() ?? '' }
            </button>
        )
    }
})