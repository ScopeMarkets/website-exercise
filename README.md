# Website Exercise

## Task #1: Translate and Refactor Page 1

1.  Extract the English copies from the markup of Page 1 into the corresponding JSON dictionary files and render the English copies using the formatter function (`t()`) from the i18n library `next-i18next`.
2.  Refactor the code that renders the list to be as concise as you think is possible.
3.  In the second section on Page 1, add 6 cards to the array that have the following content:

    - Title: Card One<br />Text: Everyone has the right to rest and leisure.
    - Title: Card Two<br />Text: No one shall be subjected to arbitrary arrest, detention or exile.
    - Title: Card Three<br />Text: Everyone is entitled in full equality to a fair and public hearing.
    - Title: Card Four<br />Text: No one shall be subjected to arbitrary interference with his privacy.
    - Title: Card Five<br />Text: Everyone has the right to freedom of thought, conscience and religion.
    - Title: Card Six<br />Text: Everyone has the right to freedom of opinion and expression.

4.  Implement type definitions in the code where you can, unless you think it would be redundant or overcomplicate the code.

We tried to set up i18n using as little custom configuration as possible, only using custom logic for route redirection and generating static page props. You can use the below resource to learn more about `next-i18next`:

https://github.com/i18next/next-i18next?tab=readme-ov-file#next-i18next

## Task #2: Implement an Interactive Chart

On Page 2, implement an interactive graphical calculator that is controlled by a slider. The necessary CSS code for the slider has already been added to `src/styles/globals.css`. For the chart, use the triangle SVG shape from `public/images/triangle.svg`.

Use the below image to reference the design (you can ignore the details, we just need the slider, the SVG shape that adjusts with the slider and the big numbers on the left and right of the slider):

<p>
  <img width="1155" alt="Screenshot 2024-11-11 at 11 35 59" src="https://github.com/user-attachments/assets/98a83a0f-c253-4ea4-b317-cf6c4660895e">
</p>

The slider should have 100 steps, showing the initial value on the left of the slider, and showing the result of the following mathematical function on the right of the slider...

```
  f(x) = x * 10
```

...where `x` is the numeric input of the slider.

## Task #3: Create a Polymorphic Component

Last but not least, create a simple wrapper polymorphic component from scratch at `src/components/MyComponent/MyComponent.tsx` that adds `40px` of padding around its children.

Allow the consumer to:

- render it with any element via the `as` prop (use `'div'` as the default value),
- completely alter the class list via the `className` prop (allowing to override existing classes such as padding) using the `twMerge` utility from the `tailwind-merge` package,
- and pass any children to it.

Also allow the consumer to specify any attributes on the component that exist on the element type used to render the component.

Usage example:

```tsx
import Link from 'next/link';

<MyComponent as={Link} href="#">
  Click me!
</MyComponent>
```
