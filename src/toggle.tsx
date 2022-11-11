import { useTheme } from './Theme-context';

export function DeepNestedComponent () {
   // get the context value
   const themeToggle = useTheme();
   // we now have access to toggle()
   return (
     <a onClick={() => themeToggle.toggle()}>
        Toggle Mode!
     </a>
   );
}