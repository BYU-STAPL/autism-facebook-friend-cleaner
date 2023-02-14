import requests

server_path = "https://stapl.cs.byu.edu"
resource_endpoint = "/fb_user_info/"

def test_json():
    request_body = {
        'users': ['test', 'josh.bedwell.14', 'ameilya.monson']
    }

    response = requests.post(server_path + resource_endpoint, json=request_body)

    if response.ok:
        print('request was successful')
    else:
        print('request failed')

    print(f'status code: {response.status_code}')

    response = response.json()

    print(response)


if __name__ == '__main__':
    test_json()
