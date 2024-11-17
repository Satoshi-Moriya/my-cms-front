document.addEventListener('DOMContentLoaded', () => {
  const dashboard = document.getElementById('dashboard');
  const articleEditor = document.getElementById('article-editor');
  const deleteModal = document.getElementById('delete-modal');

  const newArticleBtn = document.getElementById('new-article-btn');
  const editBtns = document.querySelectorAll('.edit-btn');
  const deleteBtns = document.querySelectorAll('.delete-btn');
  const saveBtn = document.getElementById('save-btn');
  const cancelBtn = document.getElementById('cancel-btn');
  const confirmDeleteBtn = document.getElementById('confirm-delete-btn');
  const cancelDeleteBtn = document.getElementById('cancel-delete-btn');

  // Switch to article editor
  newArticleBtn.addEventListener('click', () => {
      dashboard.style.display = 'none';
      articleEditor.style.display = 'block';
  });

  // Edit article button
  editBtns.forEach(btn => {
      btn.addEventListener('click', () => {
          dashboard.style.display = 'none';
          articleEditor.style.display = 'block';
      });
  });

  // Save or cancel editing
  saveBtn.addEventListener('click', () => {
      dashboard.style.display = 'block';
      articleEditor.style.display = 'none';
  });

  cancelBtn.addEventListener('click', () => {
      dashboard.style.display = 'block';
      articleEditor.style.display = 'none';
  });

  // Delete article confirmation
  deleteBtns.forEach(btn => {
      btn.addEventListener('click', () => {
          deleteModal.style.display = 'flex';
      });
  });

  confirmDeleteBtn.addEventListener('click', () => {
      deleteModal.style.display = 'none';
      alert('Article deleted');
  });

  cancelDeleteBtn.addEventListener('click', () => {
      deleteModal.style.display = 'none';
  });
});
