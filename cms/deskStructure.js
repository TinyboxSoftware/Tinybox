import S from '@sanity/desk-tool/structure-builder';
export default () =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('Home Page')
        .child(S.editor().schemaType('homepage').documentId('homepage')),
      S.listItem()
        .title('Blog')
        .child(
          S.list('Blog')
            .id('blog-list')
            .items([
              S.listItem()
                .title('Posts')
                .schemaType('post')
                .child(S.documentTypeList('post').title('Posts')),
              S.listItem()
                .title('Authors')
                .schemaType('author')
                .child(S.documentTypeList('author').title('Authors')),
              S.listItem()
                .title('Categories')
                .schemaType('category')
                .child(S.documentTypeList('category').title('Categories')),
            ])
        ),
      ...S.documentTypeListItems().filter(
        (listItem) =>
          !['homepage', 'post', 'author', 'category'].includes(listItem.getId())
      ),
    ]);
