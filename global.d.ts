import { DetailedHTMLProps, TextareaHTMLAttributes } from "react";

declare namespace JSX {
    interface IntrinsicElements {
        textarea: DetailedHTMLProps<TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement>
    }
}