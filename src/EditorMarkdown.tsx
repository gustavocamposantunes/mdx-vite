import '@mdxeditor/editor/style.css'
import {
  BoldItalicUnderlineToggles,
  headingsPlugin,
  MDXEditor,
  UndoRedo,
  CreateLink,
  BlockTypeSelect,
  ListsToggle,
  Separator,
  InsertTable,
  toolbarPlugin,
  tablePlugin,
  linkPlugin,
  linkDialogPlugin,
  quotePlugin,
  listsPlugin,
} from '@mdxeditor/editor'
import { useState } from 'react'

export const EditorMarkdown: React.FC = () => {
  const [markdown, setMarkdown] = useState('')

  return (
    <>
      <MDXEditor
        markdown={markdown}
        onChange={(markdown) => setMarkdown(markdown)}
        plugins={[
          headingsPlugin(),
          linkDialogPlugin(),
          listsPlugin(),
          linkPlugin(),
          tablePlugin(),
          quotePlugin(),
          toolbarPlugin({
            toolbarContents: () => (
              <>
                <UndoRedo />
                <Separator />
                <BoldItalicUnderlineToggles />
                <Separator />
                <ListsToggle />
                <BlockTypeSelect />
                <Separator />
                <CreateLink />
                <InsertTable />
                <Separator />
              </>
            ),
          }),
        ]}
      />

      <span style={{ marginTop: '2rem' }}>{markdown}</span>
    </>
  )
}
