import React, {ReactNode} from 'react';
import { ModalOverlay, ModalContent } from "./ModalWindow.styled";

interface ModalProps {
    Content: ReactNode;
}

export const ModalWindow: React.FC<ModalProps> = ({Content}) => {
    return (
        <ModalOverlay>
            <ModalContent>
                {Content}
            </ModalContent>
     </ModalOverlay>
    )
}