import { Menu, Button } from '@mantine/core';

export default function FilterButton({buttonText = null, data}) {
  return (
    <Menu shadow="md" width={200}>
      <Menu.Target>
      <Button 
        variant="light" size='sm' radius="xl">{buttonText}</Button>
      </Menu.Target>

      <Menu.Dropdown>
        {data.length > 0 && data.map((item) => {
            return (
            <>
            <Menu.Label>{item.parent_text}</Menu.Label>
            {item.data.map((element) => {
                return (
                    <>
                    <Menu.Item onClick={() => element.onClick()}>
                      {element.label}
                    </Menu.Item>
                    </>
                )
            })}
            </>
            )
        })}
      </Menu.Dropdown>
    </Menu>
  );
}