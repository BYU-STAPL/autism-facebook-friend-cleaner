import requests


server_path = "http://127.0.0.1:5000"
resource_endpoint = "/user_info"


def test_json():
    request_body = {
        'user_urls': ['https://www.facebook.com/josh.bedwell.14']
    }

    request = requests.get(server_path + resource_endpoint, json=request_body)

    if request.ok:
        print('request was successful')
    else:
        print('request failed')

    print(f'status code: {request.status_code}')

    response = request.json()

    print(response)


if __name__ == '__main__':
    test_json()
