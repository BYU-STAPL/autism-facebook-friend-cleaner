import time
from selenium import webdriver


def get_users_info(user_urls):

    # it looks like you need to be logged into facebook to view pages, so we might need to have
    # somebody's credentials in here

    with webdriver.Chrome() as driver:

        # driver = webdriver.Chrome()
        driver.get('https://lego.com')
        time.sleep(5)

        # driver.close()
        return {
            'id': 'information'
        }


if __name__ == '__main__':
    get_users_info(None)
