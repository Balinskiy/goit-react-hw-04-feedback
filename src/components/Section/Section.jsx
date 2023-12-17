import { TitlePrimary } from './Section.styled';

function Section({ title, children }) {
  return (
    <section>
      <TitlePrimary>{title}</TitlePrimary>
      {children}
    </section>
  );
}

export default Section;
