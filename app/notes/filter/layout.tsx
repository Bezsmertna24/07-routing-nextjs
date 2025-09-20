import css from "./LayoutNotes.module.css";

type Props = {
  children: React.ReactNode;
  sidebar: React.ReactNode;
  modal?: React.ReactNode;
};

export default function NotesLayout({ children, sidebar, modal }: Props) {
  return (
    <div className={css.container}>
      <aside className={css.sidebar}>{sidebar}</aside>

      <div className={css.notesWrapper}>{children}</div>

      {modal && <div className={css.modalWrapper}>{modal}</div>}
    </div>
  );
}
