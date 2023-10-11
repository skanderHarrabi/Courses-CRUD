import requests

BASE_URL = 'http://localhost:5010/api/v1/course'


def create_course(name, members, coachID, description):
    course_data = {
        'name': name,
        'members': members,
        'coachID': coachID,
        'description': description
    }

    response = requests.post(f'{BASE_URL}/create', json=course_data)

    if response.status_code == 200:
        print('Course created successfully.')
    else:
        print(f'Failed to create course. Status code: {response.status_code}')


def update_course(course_id, updated_data):
    response = requests.patch(f'{BASE_URL}/{course_id}', json=updated_data)

    if response.status_code == 200:
        print('Course updated successfully.')
    else:
        print(f'Failed to update course. Status code: {response.status_code}')


if __name__ == '__main__':
    create_course('New Course', ['Member1', 'Member2'],
                  'Coach1', 'Course description')

    update_course('65257beb5f2869e093df6c14', {'name': 'Updated Course Name'})
