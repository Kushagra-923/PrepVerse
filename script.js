let currentSection = 'home';
    let activeSubject = null;

    function toggleSubject(subjectId) {
      const options = document.getElementById(subjectId + '-options');
      const wasActive = options.classList.contains('active');
      
      // Close all subject options
      document.querySelectorAll('.subject-options').forEach(opt => {
        opt.classList.remove('active');
      });
      
      // Toggle current subject
      if (!wasActive) {
        options.classList.add('active');
        activeSubject = subjectId;
      } else {
        activeSubject = null;
      }
    }

    function showContent(contentId) {
      // Hide all content sections
      document.querySelectorAll('.content-section').forEach(section => {
        section.classList.remove('active');
      });
      
      // Remove active class from all navigation links
      document.querySelectorAll('.sidebar a').forEach(link => {
        link.classList.remove('active');
      });
      
      // Show selected content
      document.getElementById(contentId).classList.add('active');
      currentSection = contentId;
      
      // Update breadcrumb
      updateBreadcrumb(contentId);
      
      // Show/hide search box
      const searchBox = document.getElementById('search-box');
      if (contentId.includes('questions')) {
        searchBox.style.display = 'block';
      } else {
        searchBox.style.display = 'none';
      }
      
      // Add active class to clicked link
      event.target.classList.add('active');
    }

    function updateBreadcrumb(contentId) {
      const breadcrumb = document.getElementById('breadcrumb');
      const breadcrumbs = {
        'home': 'Home',
        'discrete-maths-questions': 'Discrete Maths > Previous Year Questions',
        'discrete-maths-notes': 'Discrete Maths > Notes',
        'ipc-questions': 'IPC > Previous Year Questions',
        'ipc-notes': 'IPC > Notes',
        'webdev-questions': 'Web Development > Previous Year Questions',
        'webdev-notes': 'Web Development > Notes'
      };
      breadcrumb.textContent = breadcrumbs[contentId] || 'Home';
    }

    // Search functionality
    const searchInput = document.getElementById("search");
    searchInput.addEventListener("input", () => {
      const query = searchInput.value.toLowerCase();
      const activeSection = document.querySelector('.content-section.active');
      if (activeSection) {
        activeSection.querySelectorAll(".question").forEach(q => {
          const text = q.innerText.toLowerCase();
          q.style.display = text.includes(query) ? "block" : "none";
        });
      }
    });

    function toggleAnswer(btn) {
      const ans = btn.nextElementSibling;
      ans.style.display = ans.style.display === "block" ? "none" : "block";
      btn.innerText = ans.style.display === "block" ? "Hide Answer" : "Show Answer";
    }