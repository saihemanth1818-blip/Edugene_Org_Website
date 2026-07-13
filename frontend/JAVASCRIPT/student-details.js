function displayStudents(data) {

    tableBody.innerHTML = "";

    if (data.length === 0) {

        tableBody.innerHTML = `
            <tr>
                <td colspan="5" class="text-center">
                    No Records Found
                </td>
            </tr>
        `;

        return;

    }

    data.forEach((student, index) => {

        tableBody.innerHTML += `

            <tr data-student-id="${student.id}">

                <td>${index + 1}</td>

                <td>${student.name}</td>

                <td>${student.email}</td>

                <td>${student.phone}</td>

                <td>${student.message}</td>

                <td>
                    <button class="btn btn-info btn-sm edit-btn" data-id="${student.id}" data-bs-toggle="modal" data-bs-target="#editStudentModal">
                        <i class="bi bi-pencil-square"></i> Edit
                    </button>
                    <button class="btn btn-danger btn-sm delete-btn" data-id="${student.id}">
                        <i class="bi bi-trash"></i> Delete
                    </button>
                </td>

            </tr>

        `;

    });

}