import requests


server_path = "http://127.0.0.1:5000"
resource_endpoint = "/user_info"


def test_json():
    request_body = {
        'users': ['josh.bedwell.14', 'ameilya.monson']
    }

    response = requests.get(server_path + resource_endpoint, json=request_body)

    if response.ok:
        print('request was successful')
    else:
        print('request failed')

    print(f'status code: {response.status_code}')

    response = response.json()

    print(response)


if __name__ == '__main__':
    test_json()
