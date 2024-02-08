/**
 * Interface for the props of the WaitList component.
 */
export interface WaitListProps {
    /**
     * A ref object that will be attached to a HTMLDivElement.
     * This allows direct access to the DOM element in the WaitList component.
     */
    waitListRef: React.RefObject<HTMLDivElement>;
}