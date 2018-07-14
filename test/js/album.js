function LinkClick(param) {
      var elem = document.getElementById("image01");

      switch (param) {
        case 0:
          elem.src = "image/photo-1.jpg";
          break;
        case 1:
          elem.src = "image/photo-2.jpg";
          break;
        case 2:
          elem.src = "image/photo-3.jpg";
          break;
        case 3:
          elem.src = "image/photo-4.jpg";
          break;
        case 4:
          elem.src = "image/photo-5.jpg";
          break;
        case 5:
          elem.src = "image/photo-6.jpg";
          break;
        default:
          elem.src = "image/photo-6.jpg";
          break;
      }
    }